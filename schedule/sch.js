function showDay1() {
    const content1 = document.getElementById("day1-schedule");
    const content2 = document.getElementById("day2-schedule");   
    content2.classList.remove("show");
    content2.classList.add("hide");
    content1.classList.add("show");
}
function showDay2() { 
    const content2 = document.getElementById("day2-schedule");
    const content1 = document.getElementById("day1-schedule");     
    content2.classList.remove("hide");
    content1.classList.remove("show");
    content1.classList.add("hide");
    content2.classList.add("show");
}
