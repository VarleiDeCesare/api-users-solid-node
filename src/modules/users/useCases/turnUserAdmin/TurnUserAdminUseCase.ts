import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute(user_id: string): User {
    const user = this.usersRepository.findById(user_id);

    if (user.admin === false) {
      this.usersRepository.turnAdmin(user);
      user.updated_at = new Date();
    }
    return user;
  }
}

export { TurnUserAdminUseCase };
