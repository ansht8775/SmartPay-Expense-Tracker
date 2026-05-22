const form =
document.getElementById("paymentForm");

const paymentList =
document.getElementById("paymentList");

const totalAmount =
document.getElementById("totalAmount");

const transactionCount =
document.getElementById("transactionCount");

const themeToggle =
document.getElementById("themeToggle");

let total = 0;

let count = 0;

/* CHART */

const ctx =
document.getElementById('expenseChart');

const expenseChart =
new Chart(ctx, {

    type:'doughnut',

    data:{

        labels:[
            'Food',
            'Shopping',
            'Travel',
            'Recharge'
        ],

        datasets:[{

            data:[12,19,8,5],

            backgroundColor:[
                '#2563eb',
                '#7c3aed',
                '#06b6d4',
                '#22c55e'
            ]

        }]
    }
});

/* ADD PAYMENT */

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    // hide empty message
    document.getElementById("empty").style.display = "none";

    // update totals
    total += Number(amount);
    count++;

    totalAmount.innerHTML = `₹${total}`;
    transactionCount.innerHTML = count;

    // create transaction div
    const div = document.createElement("div");
    div.classList.add("transaction");

    // ✅ FIXED: innerHTML properly inside
    div.innerHTML = `
        <div>
            <h4>${title}</h4>
            <small>${category} • ${date}</small>
        </div>

        <h3>₹${amount}</h3>
    `;

    // append to list
    paymentList.appendChild(div);

    // reset form
    form.reset();

});