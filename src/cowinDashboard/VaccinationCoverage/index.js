import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
} from "recharts"

const VaccinationCoverage = (props) => {
    const DataFormatter = (number) => {
        if (number > 1000) {
            return `${(number / 1000).toString()}k`
        }
        return number.toString()
    }
    const { vaccinationCoverageDetails } = props

    return (
        <div>
            <h1>Vaccination Coverage</h1>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart
                    width={500}
                    height={200}
                    data={vaccinationCoverageDetails}
                    margin={{
                        top: 5,
                    }}
                >
                    <XAxis
                        dataKey="vaccineDate"
                        tick={{
                            stroke: "#6c757d",
                            strokeWidth: 1,
                            fontSize:15,
                            fontFamily: 'Roboto'
                        }}
                    />
                    <YAxis
                        tickFormatter={DataFormatter}
                        tick={{
                            stroke: "#6c757d",
                            strokeWidth: 0.5,
                            fontSize:15,
                            fontFamily: "Roboto"

                        }}
                    />
                    <Legend
                        wrapperStyle={{
                            paddingTop: 30,
                            textAlign: "center",
                            fontSize:12,
                            fontFamily: "Roboto"
                        }}
                    />
                    <Bar dataKey="does1" name="Dose 1" radius={[10,10,0,0]} fill="#5a8dee"  barSize="20%" />
                    <Bar dataKey="dose2" name="Dose 2" radius={[5, 5, 0, 0]} fill="#f54394" barSize="20%" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
export default VaccinationCoverage