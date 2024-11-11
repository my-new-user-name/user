document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const agreeCheckbox = document.getElementById('agree');
    if (!agreeCheckbox.checked) {
        alert("Please agree to the terms and conditions.");
        return;
    }

    // Gather form data for the summary
    const name = document.querySelector("input[name='name']").value;
    const address = document.querySelector("input[name='address']").value;
    const city = document.querySelector("input[name='city']").value;
    const province = document.querySelector("input[name='province']").value;
    const phone = document.querySelector("input[name='phone']").value;

    // Display order confirmation
    const orderSummary = `
        Order Summary:
        - Name: ${name}
        - Address: ${address}, ${city}, ${province}
        - Phone: ${phone}
        
        Total: P 1,349.00

        Thank you for your order!
    `;
    
    if (confirm(orderSummary + "\n\nClick OK to confirm your order.")) {
        alert("Order placed successfully!");
        // You could also clear the form here if needed
        document.getElementById('checkoutForm').reset();
    } else {
        alert("Order cancelled.");
    }
});