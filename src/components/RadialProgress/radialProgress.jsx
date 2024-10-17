
const RadialProgress = ({size, radius, progress, text, color}) => {
    const width = `w-${size}`
    const height = `h-${size}`
    const circumference = Number((2 * Math.PI * radius).toFixed(1))
    const strokeDashOffset = (circumference - (circumference * progress) / 100)

    return (
        <div className={`relative ${width} ${height}`}>
            <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                    className="text-gray-200 stroke-current"
                    strokeWidth="3"
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="transparent"
                />

                <circle
                    className={`${color} progress-ring__circle stroke-current`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={`${strokeDashOffset}px`}/>

                <text
                    x="50"
                    y="50"
                    fontSize="12"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="lightgray"
                >
                    {text}

                </text>
            </svg>
        </div>
    )
}

export default RadialProgress;