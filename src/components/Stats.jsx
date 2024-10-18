import React from 'react'
import { FaChartSimple } from "react-icons/fa6";
import { calculateCoffeeStats, calculateCurrentCaffeineLevel, coffeeConsumptionHistory, getTopThreeCoffees, statusLevels } from '../utils';
import { useAuth } from '../context/AuthContext';

function StatCard(props) {

    const { lg, title, children } = props

    return (
        <div className={'card stat-card ' + (lg ? 'col-span-2' : '')}>
            <h4>{title}</h4>
            {children}
        </div>
    )
}

const Stats = () => {

    const { globalData } = useAuth()
    const stats = calculateCoffeeStats(globalData)
    console.log(stats);

    const caffeineLevel = calculateCurrentCaffeineLevel(globalData)
    const warningLevel = caffeineLevel < statusLevels['low'].maxLevel 
    ? 'low' : caffeineLevel < statusLevels['moderate'].maxLevel 
    ? 'moderate' : 'high'

  return (
    <div>
        <div className='section-header'>
            <FaChartSimple />
            <h2>Stats</h2>
        </div>
        <div className='stats-grid'>
            <StatCard lg title="Active caffeine Level">
                <div className='status'>
                    <p><span className='stat-text' >{caffeineLevel}</span>mg</p>
                    <h5 style={{color: statusLevels[warningLevel].color, 
                        background: statusLevels[warningLevel].background}}>{warningLevel}</h5>
                </div>
                <p>{statusLevels[warningLevel].description}</p>
            </StatCard>
            <StatCard title="Daily Caffeine">
                <p>
                    <span className='stat-text'>{stats.daily_caffeine}</span>
                    mg
                </p>
            </StatCard>
            <StatCard title="Avg # of coffees">
                <p>
                    <span className='stat-text'>{stats.average_coffees}</span>
                </p>
            </StatCard>
            <StatCard title="Daily cost ($)">
                <p>
                    $ <span className='stat-text'>{stats.daily_cost}</span>
                </p>
            </StatCard>
            <StatCard title="Total cost ($)">
                <p>
                    $ <span className='stat-text'>{stats.total_cost}</span>
                </p>
            </StatCard>
            <table className='stat-table'>
                <thead>
                    <tr>
                        <th>Coffee Name</th>
                        <th>Number of Purchase</th>
                        <th>Percentage of Total</th>
                    </tr>
                </thead>
                <tbody>
                    {getTopThreeCoffees(globalData).map((coffee, coffeeIndex) => {
                        return (
                            <tr key={coffeeIndex}>
                                <td>{coffee.coffeeName}</td>
                                <td>{coffee.count}</td>
                                <td>{coffee.percentage}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Stats