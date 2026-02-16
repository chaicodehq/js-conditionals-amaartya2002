/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here

  const tipBucket = {
    tipPercentage: 0,
    tipAmount: 0,
    totalAmount: 0
  }

  if (billAmount <= 0) {
    return null
  }

  if (serviceRating != 1 && serviceRating != 2 && serviceRating != 3 && serviceRating != 4 && serviceRating != 5) {
    return null
  }

  if (serviceRating === 1) {

    tipBucket.tipPercentage = 5
    const tippingAmount = (5 / 100) * billAmount
    tipBucket.tipAmount = parseFloat(tippingAmount.toFixed(2))
    tipBucket.totalAmount = tipBucket.tipAmount + billAmount

  } else if (serviceRating === 2) {

    tipBucket.tipPercentage = 10
    const tippingAmount = (10 / 100) * billAmount
    tipBucket.tipAmount = parseFloat(tippingAmount.toFixed(2))
    tipBucket.totalAmount = tipBucket.tipAmount + billAmount

  } else if (serviceRating === 3) {

    tipBucket.tipPercentage = 15
    const tippingAmount = (15 / 100) * billAmount
    tipBucket.tipAmount = parseFloat(tippingAmount.toFixed(2))
    tipBucket.totalAmount = tipBucket.tipAmount + billAmount

  } else if (serviceRating === 4) {

    tipBucket.tipPercentage = 20
    const tippingAmount = (20 / 100) * billAmount
    tipBucket.tipAmount = parseFloat(tippingAmount.toFixed(2))
    tipBucket.totalAmount = tipBucket.tipAmount + billAmount

  } else {

    tipBucket.tipPercentage = 25
    const tippingAmount = (25 / 100) * billAmount
    tipBucket.tipAmount = parseFloat(tippingAmount.toFixed(2))
    tipBucket.totalAmount = tipBucket.tipAmount + billAmount

  }

  return tipBucket;


}
