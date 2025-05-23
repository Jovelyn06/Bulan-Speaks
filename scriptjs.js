const EMAILJS_PUBLIC_KEY = "OqpuJxoC3bpR__mJo";
const EMAILJS_SERVICE_ID = "service_x2l630f";
const EMAILJS_TEMPLATE_ID = "template_4czftjq";

emailjs.init(EMAILJS_PUBLIC_KEY);

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("issue-form");
    const confirmation = document.getElementById("confirmation");

    if (!form) return;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const params = {
            problem_report: document.getElementById("problem_report").value.trim(),
            healthcare_rating: document.getElementById("healthcare_rating").value,
            community_services_rating: document.getElementById("community_services_rating").value,
            officials_service_rating: document.getElementById("officials_service_rating").value,
            safety_rating: document.getElementById("safety_rating").value,
            cleanliness_rating: document.getElementById("cleanliness_rating").value,
            public_transport_rating: document.getElementById("public_transport_rating").value,
            environment_rating: document.getElementById("environment_rating").value
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
            .then(function() {
                confirmation.style.display = "block";
                form.reset();
                setTimeout(() => {
                    confirmation.style.display = "none";
                }, 5000);
            }, function(error) {
                alert("Sorry, there was an error sending your report. Please try again later.");
                console.error("EmailJS error:", error);
            });
    });
});
