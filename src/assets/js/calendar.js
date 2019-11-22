let dateToday = new Date()

let cal = {
  mName : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], 
  data : null,
  currDay : dateToday.getDate(), 
  currMonth : dateToday.getMonth(), 
  currYear : dateToday.getFullYear(), 

  list : function () {
    let daysInMth = new Date(cal.currYear, cal.currMonth+1, 0).getDate()
    let startDay = new Date(cal.currYear, cal.currMonth, 1).getDay() 
    let endDay = new Date(cal.currYear, cal.currMonth, daysInMth).getDay()
    let inCurrentMonth = true

    if (cal.currMonth != dateToday.getMonth()) inCurrentMonth = false

    document.getElementById('cal-year').innerHTML = cal.currYear

    cal.data = localStorage.getItem("cal-" + cal.currMonth + "-" + cal.currYear)
    if (cal.data==null) {
      localStorage.setItem("cal-" + cal.currMonth + "-" + cal.currYear, "{}")
      cal.data = {}
    } else {
      cal.data = JSON.parse(cal.data)
    }

    let squares = [];
    if (cal.sMon && startDay != 1) {
      let blanks = startDay==0 ? 7 : startDay 
      for (let i=1; i<blanks; i++) { squares.push("b") }
    }

    if (!cal.sMon && startDay != 0) for (let i=0; i<startDay; i++) { squares.push("b") }
    for (let i=1; i<=daysInMth; i++) { squares.push(i) }

    if (cal.sMon && endDay != 0) {
      let blanks = endDay==6 ? 1 : 7-endDay
      for (let i=0; i<blanks; i++) { squares.push("b") }
    }

    if (!cal.sMon && endDay != 6) {
      let blanks = endDay==0 ? 6 : 6-endDay
      for (let i=0; i<blanks; i++) { squares.push("b") }
    }

    let container = document.getElementById("cal-container"),
    cTable = document.createElement("table")
    cTable.id = "calendar"
    container.innerHTML = ""
    container.appendChild(cTable)

    let cRow = document.createElement("tr"),
    cCell = null,
    days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    if (cal.sMon) days.push(days.shift())
    for (let d of days) {
      cCell = document.createElement("td")
      cCell.innerHTML = d
      cRow.appendChild(cCell)
    }
    cRow.classList.add("head")

    let total = squares.length
    cRow = document.createElement("tr")
    cRow.classList.add("day")
    for (let i=0; i<total; i++) {
      cCell = document.createElement("td")
      if (squares[i]=="b") cCell.classList.add("blank")
      else {
        if(squares[i] == cal.currDay && inCurrentMonth) {
          cCell.innerHTML = "<div class='dd currentDay'>"+squares[i]+"</div>"
        } else {
          cCell.innerHTML = "<div class='dd'>"+squares[i]+"</div>"
        }
        if (cal.data[squares[i]]) cCell.innerHTML += "<div class='evt'>" + cal.data[squares[i]] + "</div>"
        
      }
      cRow.appendChild(cCell);
      if (i!=0 && (i+1)%7==0) {
        cTable.appendChild(cRow)
        cRow = document.createElement("tr")
        cRow.classList.add("day")
      }
    }

    cal.loadEvents()
  },

  loadEvents () {
    // TODO
  },

  loadNextMonth : function () {
    let months = document.getElementById("month-headers")
    months.innerHTML = ''

    if (cal.currMonth == 12) {
      cal.currMonth = 1
      cal.currYear++
    } else {
      cal.currMonth++
    }

    let j = 0
    if (cal.currMonth > 8) j = 4

    for (let i = 0; i < 8; i++, j++) {
      let monthLabel = document.createElement("span")
      monthLabel.className += "mx-5 testStyle"
      monthLabel.innerHTML = cal.mName[j]
      let divider = document.createElement("div")
      divider.className += "divider-vertical mx-4"
      months.appendChild(monthLabel)
      
      if( cal.mName[j] == cal.mName[cal.currMonth-1] ) monthLabel.className += " currentMonth"
      if( i < 7 ) months.appendChild(divider)
    }
    cal.list()
  },

  loadPrevMonth : function () {
    let months = document.getElementById("month-headers")
    months.innerHTML = ''

    if (cal.currMonth == 1) {
      cal.currMonth = 12
      cal.currYear--
    } else {
      cal.currMonth--
    }

    let j = 0
    if (cal.currMonth > 8) j = 4

    for (let i = 0; i < 8; i++, j++) {
      let monthLabel = document.createElement("span")
      monthLabel.className += "mx-5 testStyle"
      monthLabel.innerHTML = cal.mName[j]
      let divider = document.createElement("div")
      divider.className += "divider-vertical mx-4"

      months.appendChild(monthLabel)
      
      if( cal.mName[j] == cal.mName[cal.currMonth-1] ) monthLabel.className += " currentMonth"
      if( i < 7 ) months.appendChild(divider)
    }

    cal.list()
  },
};

window.addEventListener("load", function () {
  let now = new Date()
  let nowMth = now.getMonth()
  let nowYear = parseInt(now.getFullYear())

  let month = document.getElementById("cal-mth")
  for (let i = 0; i < 12; i++) {
    let opt = document.createElement("option")
    opt.value = i
    opt.innerHTML = cal.mName[i]
    if ( i == nowMth ) opt.selected = true
    month.appendChild(opt)
  }

  let months = document.getElementById("month-headers");

  let j = 0
  if (cal.currMonth > 4) j = 4
  
  for (let i = 0; i < 8; i++, j++) {
    let monthLabel = document.createElement("span")
    monthLabel.className += "mx-5 testStyle"
    monthLabel.innerHTML = cal.mName[j]
    let divider = document.createElement("div")
    divider.className += "divider-vertical mx-4"

    months.appendChild(monthLabel)
    
    if( cal.mName[j] == cal.mName[cal.currMonth-1] ) monthLabel.className += " currentMonth"
    if( i < 7 ) months.appendChild(divider)
  }

  let year = document.getElementById("cal-yr")
  for (let i = nowYear-10; i<=nowYear+10; i++) {
    let opt = document.createElement("option")
    opt.value = i
    opt.innerHTML = i
    if ( i == nowYear ) opt.selected = true
    year.appendChild(opt)
  }

  document.getElementById("cal-set").addEventListener("click", cal.list)
  document.getElementById("cal-month-next").addEventListener("click", cal.loadNextMonth)
  document.getElementById("cal-month-next1").addEventListener("click", cal.loadNextMonth)
  document.getElementById("cal-month-prev").addEventListener("click", cal.loadPrevMonth)
  document.getElementById("cal-month-prev1").addEventListener("click", cal.loadPrevMonth)
  cal.list()
});