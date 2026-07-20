const ticketSelect = document.getElementById('tickets');
const payButton = document.getElementById('payButton');

// Your live Stripe Test Link
const STRIPE_LINK = "https://buy.stripe.com/test_6oU8wP7Hr5ese13cwVbII00";

if (ticketSelect && payButton) {
    ticketSelect.addEventListener('change', (e) => {
        const quantity = e.target.value;
        const total = quantity * 25;
        payButton.textContent = `Pay Now ($${total})`;
    });

    payButton.addEventListener('click', () => {
        payButton.textContent = "Redirecting to secure checkout...";
        payButton.disabled = true;

        window.location.href = STRIPE_LINK;
    });
}
