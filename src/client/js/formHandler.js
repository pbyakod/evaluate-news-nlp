function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value.trim();
    if (Client.checkForName(formText)) {
        document.getElementById('result_polarity').innerHTML = "";
        document.getElementById('result_subjectivity').innerHTML = "";
        alert("Field empty! Please enter a value");
    } else {
        console.log("::: Form Submitted :::");
        handleFetch();
    }
}

function handleFetch() {
    fetch('http://localhost:8050/test')
        .then(function(res) {
            return res.json();
        })
        .then(function(res) {
            document.getElementById('result_polarity').innerHTML = res.score_tag;
            document.getElementById('result_subjectivity').innerHTML = res.subjectivity;
            console.log("::: Score Tag Result :::", res.score_tag);
            console.log("::: Subjectivity Result :::", res.subjectivity);
        })
        .catch(function(error) {
            console.error("Error:", error);
        });
}

export { handleSubmit, handleFetch };

