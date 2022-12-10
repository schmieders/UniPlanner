class LogicHandler {

    getItems(type) {
        let items = JSON.parse(window.localStorage.getItem(type))
        return items == null ? [] : items
    }

    getItem(type, id) {
        let item = JSON.parse(window.localStorage.getItem(type))
        return item == null ? {} : item.filter(item => {
            return item.id == id
        })[0]
    }

    addItem(type, item) {
        let items = this.getItems(type)
        items[items.length] = item
        window.localStorage.setItem(type, JSON.stringify(items))
    }

    updateItem(type, data) {
        let items = this.getItems(type)
        items.forEach((item, idx) => {
            if (item.id == data.id)
                items[idx] = data
        })
        window.localStorage.setItem(type, JSON.stringify(items))
    }

    removeItem(type, id) {
        let items = this.getItems(type).filter(item => {
            return item.id != id
        })
        window.localStorage.setItem(type, JSON.stringify(items))
    }

    saveItem(type, id, multiple = "s") {
        let json = this.getFormData(type + "Form" + id)
        if (!json) {
            document.getElementById(type + "Modal" + id).querySelector("p.error").classList.add("show")
            return
        }

        json.id = id == "Create" ? this.getId(type) : id

        if (id == "Create")
            this.addItem(type + multiple, json)
        else
            this.updateItem(type + multiple, json)

        window.location.href = window.location.href.replace(window.location.search, "")
    }

    getId(type) {
        var values = JSON.parse(window.localStorage.getItem("currentIds"))
        if (values == null)
            values = {}

        if (values[type] == null)
            values[type] = 0

        let id = values[type]
        values[type] = parseInt(values[type]) + 1
        window.localStorage.setItem("currentIds", JSON.stringify(values))
        return id
    }

    getAsDataList(type, field, selected) {
        let datalist = ""
        Array.from(this.getItems(type)).forEach(item => {
            if (selected.length > 0 && selected.filter(select => { return parseInt(select) == item['id'] }).length > 0)
                datalist += `<option value="${item['id']}" selected>${item[field]}</option>`
            else
                datalist += `<option value="${item['id']}">${item[field]}</option>`
        })
        return datalist
    }

    getAsDataListWithRange(type, rangeStart, rangeEnd, selected) {
        let datalist = ""
        Array.from(this.getItems(type)).forEach(item => {
            if (selected.length > 0 && selected.filter(select => { return parseInt(select) == item['id'] }).length > 0)
                datalist += `<option value="${item['id']}" selected>${this.formatDateTime(item[rangeStart])} - ${this.formatDateTime(item[rangeEnd])}</option>`
            else
                datalist += `<option value="${item['id']}">${this.formatDateTime(item[rangeStart])} - ${this.formatDateTime(item[rangeEnd])}</option>`
        })
        return datalist
    }

    getAsDateList(type, field, selected) {
        let datalist = ""
        Array.from(this.getItems(type)).forEach(item => {
            if (selected.length > 0 && selected.filter(select => { return parseInt(select) == item['id'] }).length > 0)
                datalist += `<option value="${item['id']}" selected>${this.formatDateTimeToDate(item[field])}</option>`
            else
                datalist += `<option value="${item['id']}">${this.formatDateTimeToDate(item[field])}</option>`
        })
        return datalist
    }

    getFormData(form) {
        let fields = Array.from(document.getElementById(form).querySelectorAll(".modalInput"))
        let json = {}
        let valid = true

        fields.forEach(element => {
            if (typeof element.options != "undefined") {
                let values = []
                Array.from(element.options).forEach(option => {
                    if (option.selected && !option.disabled)
                        values.push(option.value)
                })
                if (values.length == 0)
                    valid = false

                json[element.name] = values
            } else {
                if (element.value.trim().length == 0)
                    valid = false

                json[element.name] = element.value
            }
        })

        if (!valid)
            return false

        return json
    }

    formatDateTime(dateTime) {
        let split = dateTime.split("T")
        let dateSplit = split[0].split("-")

        return dateSplit[2] + "." + dateSplit[1] + "." + dateSplit[0] + " " + split[1]
    }

    formatDateTimeToDate(dateTime) {
        let split = dateTime.split("T")
        let dateSplit = split[0].split("-")

        return dateSplit[2] + "." + dateSplit[1] + "." + dateSplit[0]
    }
}

window.addEventListener('load', function () {
    document.getElementsByClassName("sidebar")[0].style.minHeight = `${document.body.offsetHeight - 66}px`
})

window.addEventListener('resize', function () {
    document.getElementsByClassName("sidebar")[0].style.minHeight = `${document.body.offsetHeight - 66}px`
})
