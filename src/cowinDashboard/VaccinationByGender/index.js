import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"

const VaccinationByGender = (props) => {
    const { vaccinationByGender } = props
    console.log("ggggggggg", vaccinationByGender)
    return (
        <div>
            <h1>Vaccination by gender</h1>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        cx="50%"
                        cy="40%"
                        data={vaccinationByGender}
                        startAngle={180}
                        endAngle={0}
                        innerRadius="30%"
                        outerRadius="60%"
                        dataKey="count"
                    >
                        <Cell name="Male" fill="#f54394" />
                        <Cell name="Female" fill="#5a8dee" />
                        <Cell name="Others" fill="#2cc6c6" />
                    </Pie>
                    <Legend
                        iconType="circle"
                        layout="vertical"
                        verticalAlign="bottom"
                        align="center"
                        wrapperstyle={{ fontSize: 12, fontFamily: 'Roboto' }}
                    />
                </PieChart>
            </ResponsiveContainer>


        </div>
    )
}
export default VaccinationByGender