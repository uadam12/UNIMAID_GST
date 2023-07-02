function saveMode(mode) {
    window.localStorage.setItem("mode", mode);
}

function saveCourse(course) {
    window.localStorage.setItem("course", `${course}`);
}

function getMode() {
    const mode = window.localStorage.getItem("mode");
    if(mode) return mode;
    
    return "quick";
}

function getCourse() {
    const course = window.localStorage.getItem("course");

    if(course) return course;

    return "211";
}

function getData() {
    const data = getCourse();

    if("122" === data) return "211";

    return data;
}

export {getMode, getCourse, getData, saveCourse, saveMode};