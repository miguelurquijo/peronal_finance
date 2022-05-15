const bcrypt = require('bcryptjs');

const helpers = {}

helpers.encryptPassword = async (password) => {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

helpers.matcPassword = async (password, hash) => {
    try {
        const result = await bcrypt.compare(password, hash);
        return result;
    } catch (error) {
        console.log(error);
    }
};

module.exports = helpers;