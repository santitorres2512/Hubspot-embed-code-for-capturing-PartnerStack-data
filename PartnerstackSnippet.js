<script type='text/javascript'>(function() {var gs = document.createElement('script');gs.src = 'https://js.partnerstack.com/v1/';gs.type = 'text/javascript';gs.async = 'true';gs.onload = gs.onreadystatechange = function() {var rs = this.readyState;if (rs && rs != 'complete' && rs != 'loaded') return;try {growsumo._initialize('pk_xWDWzqmvsZCGRmYISRnydQNAS8h3cdGQ');if (typeof(growsumoInit) === 'function') {growsumoInit();}} catch (e) {}};var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(gs, s);})();</script>

<script>

    function registerSignup(e) {
        // In this case, we access form elements by their `name` attribute
        // HubSpot Forms sometimes randomize their IDs, so accessing 
        // by `name` is more reliable
        e.preventDefault();
        console.log('Reached registerSignup()');
        growsumo.data.name = document.querySelector('input[name="firstname"]').value + " " + document.querySelector('input[name="lastname"]').value;
        growsumo.data.email = document.querySelector('input[name="email"]').value;
        growsumo.data.customer_key = document.querySelector('input[name="email"]').value;
        growsumo.createSignup(function() {
            console.log("Create signup called successfully");
        });
    }

    // In this case, the form is not within an iFrame embed, and we're
    // able to access the form DOM element to register an event
    // listener
    var formReference = document.getElementsByClassName('hs-form')[0];

    // In rare events where the DOM element isn't reachable at the time
    // this script executes, we wait a couple seconds before attempting
    // again:
    if (!formReference) {
        console.log('Form not found yet, waiting 2 seconds...')
        // Set a time delay to capture the field afterwards:
        setTimeout(function() {
            formReference = document.getElementsByClassName('hs-form')[0];
            formReference.addEventListener("submit", function(e) {
                console.log('PS Signup');
                registerSignup(e);
            });
        }, 2000);
    } else {
        formReference.addEventListener("submit", function(e) {
            console.log('PS Signup');
            registerSignup(e);
        });
    }

</script>

