function checkLunch() {   

function dayOfTheWeek() {
      var d = new Date();
      var n = d.getDay()
      return n;
    }

    function workingDay(dayOfTheWeek) {
      return dayOfTheWeek >= 1 && dayOfTheWeek <= 5;
    }

    document.getElementById("workingDay").innerHTML = (workingDay(dayOfTheWeek()));

    const lunchStart = 11 * 60 + 30;
    const lunchEnd = 12 * 60 + 30;
    const date = new Date();
    const now = date.getHours() * 60 + date.getMinutes();

    function lunchTime(now) {
      return lunchStart <= now && now <= lunchEnd
    }
    document.getElementById("lunchTime").innerHTML = (lunchTime(now));

    function kimIsReady() {
      return true;
    }
    document.getElementById("kimIsReady").innerHTML = (kimIsReady());
}

window.onload="checkLunch()";
