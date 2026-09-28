function capitalizeName(name) {
    let names = name.split(" ");

    let firstName = names[0].charAt(0).toUpperCase() + names[0].slice(1);
    let lastName = names[1].charAt(0).toUpperCase() + names[1].slice(1);

    return firstName + " " + lastName;
}

module.exports = capitalizeName;