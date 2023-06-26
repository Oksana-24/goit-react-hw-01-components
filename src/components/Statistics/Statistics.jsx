import { StatisticsList, StatisticsSection } from "./Statistics.styled"

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({title, stats}) => {
return (
    <StatisticsSection>
        {title && <h2 className="title">{title}</h2>}
    <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
            return (<li key={id}
            style={{backgroundColor:getRandomHexColor()}}> 
                <span>{label}</span>
                <span>{percentage}</span>
        </li>)
        })}
    </StatisticsList>
        
    {/* <ul className="stat-list">
        <li className="item">
            <span className="label">.docx</span>
            <span className="percentage">4%</span>
        </li>
        <li className="item">
            <span className="label">.mp3</span>
            <span className="percentage">14%</span>
        </li>
        <li className="item">
            <span className="label">.pdf</span>
            <span className="percentage">41%</span>
        </li>
        <li className="item">
            <span className="label">.mp4</span>
            <span className="percentage">12%</span>
        </li>
    </ul> */}
</StatisticsSection>
    )
}
