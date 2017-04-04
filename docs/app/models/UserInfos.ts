export class UserInfos {

  constructor(
    public $key: string,
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public admin: boolean
  ) { }

  static fromJsonList(array): UserInfos[] {
    return array.map(UserInfos.fromJson);
  }

  static fromJson({$key, firstname, lastname,
    email, password, admin}): UserInfos {

    return new UserInfos($key, firstname, lastname,
      email, password, admin);
  }
}
