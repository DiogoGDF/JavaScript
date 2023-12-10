const AppError = require('../utils/AppError')
class UsersController {
  create(req, res) {
    const { name, email, password } = req.body
    if ( !name ) { 
      throw new AppError('Nome é obrigatório')
    }
    else if ( !email ) { 
      throw new AppError('Email é obrigatório')
    }
    else if ( !password ) { 
      throw new AppError('Senha é obrigatória')
    }
    res.status(201).json({ name, email, password })
  }
}

module.exports = UsersController