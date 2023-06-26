import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
<thead>
    <tr className={css.title}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
    </tr>
</thead>

<tbody>
    {
        items.map(({id,type,amount,currency})=>{
            return (
              <tr key={id} className={css.rows}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            )
        })
    }
</tbody>
  {/* <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody> */}
</table>
  )
}
