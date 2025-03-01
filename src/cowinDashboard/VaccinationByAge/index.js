import { PieChart, Pie, Legend, Cell, ResponsiveContainer} from "recharts"

const VaccinationByAge = (props) => {
    const { vaccinationAgeDetails } = props

    return (
        <div>
            <h1>Vaccination by age</h1>
            <ResponsiveContainer width="100%" height={300}>
            <PieChart width={1000} heigth={300}>
                <Pie
                    cx="50%"
                    cy="30%"
                    data={vaccinationAgeDetails}
                    outerRadius="60%"
                    dataKey="count"
                >
                    <Cell name="18-44" fill="#2d87bb" />
                    <Cell name="44-60" fill="#a3df9f" />
                    <Cell name="Above 60" fill="#64C2A6" />
                </Pie>
                <Legend
                    iconType="circle"
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    wrapperStyle={{ fontSize: 12, fontFamily: 'Roboto' }}
                />
            </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
export default VaccinationByAge