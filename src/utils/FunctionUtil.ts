export function formatCurrency(num) {
  const integerPart = Math.round(Math.abs(num)) * Math.sign(num)

  // Định dạng với dấu chấm phân cách
  return (
    new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
    }).format(integerPart) + ' vnđ'
  )
}
