//update user setting
function updateSetting(currentSettings,newSettings){
    return {...currentSettings, ...newSettings}
}

let current = {theme: "light", lang: "en", fontSize: 16}
let update = {theme: "dark", lang: "en", fontSize: 12}

let updated = updateSetting(current,update)
console.log(updated)