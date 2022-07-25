export enum srcAsset {
    DEFAULT_IMG = 'assets/images/default-photo.svg',
    arrowUpURL = 'assets/images/arrow-up-icon.svg',
    arrowDownURL = 'assets/images/arrow-down-icon.svg',
    nextPageIcon = 'assets/images/next-page-icon.svg',
    editIcon = 'assets/images/edit-icon.svg',
    deleteIcon = 'assets/images/delete-icon.svg',
    IMG_DATEPICKER = 'assets/images/datepicker.svg',
    arrowDownfilled = 'assets/images/arrow-down-filled.svg',
    googleIcon = 'assets/images/google-icon.svg',
    facebookIcon = 'assets/images/facebook-icon.svg',
    vkIcon = 'assets/images/vk-icon.svg',
    logo = 'assets/images/logo.svg',
}
export enum attribute {
    pointer = 'pointer',
    text = 'text',
    TEXT_TYPE = 'text',
    NUMBER_TYPE = 'number',
    INPUT = 'input',
    FILE = 'file',
    ACCESS_FILE_EXTENSION = '.jpg, .jpeg, .png',
    widthDialog = '500px',
    widthAvatar= '64px',
    heightAvatar= '64px',
    icon = 'icon',
    title = 'title',
    noIcon = 'noIcon'
}
export enum i18nRU {
    TITLE_ADMIN = 'Личный кабинет администратора',
    POST  = 'Администратор',
    FORM_ADD_TITLE_INSTRUCTOR = 'Добавить инструктора',
    FORM_EDIT_TITLE_INSTRUCTOR = 'Редактировать профиль инструктора',
    FORM_DATE = 'Дата',
    FORM_EDIT_TITLE_VISITER = 'Редактировать профиль пользователя',
    FORM_ADD_TITLE_VISITER = 'Добавить профиль пользователя',
    APPOINTED_VISITOR = 'Назначить поситителя',
    EXPERIENCE = '. Опыт ',
    APPOINT_COACH = 'Назначить тренера',
    TITLE_DELETE_VISITER = 'Удаление посетителя',
    TEXT_DELETE_VISITER = 'Вы уверены, что хотите удалить карточку этого посетителя?',
    TITLE_VISITER = 'Карточка посетителя',
    APPOINTED_INSTRUCTOR = 'Назначенный тренер',
    SELECT_IMG = 'Вам нужно выбрать изображение',
    SELECT_ONLY_IMG = 'Для выбора доступны только изображения',
    ADD_NEW = 'Добавить новый',
    ADD_NEW1 = 'Добавить нового',
    FIO = 'ФИО',
    SKIPASSES = 'Ски-пассы',
    INSTRUCTOR = 'Назначить тренера',
    INSTRUCTORS = 'Инструкторы',
    VISITERS = 'Посетители',
    VISITER = 'Посетитель',
    ASSIGN_VISITOR = 'Назначить посетителя',
    EDIT = 'Редактировать',
    DELETE = 'Удалить',
    ADD = 'Добавить',
    PASS = 'Пропуск',
    FORM_TITLE_SKIPASS = 'Добавить новый ски-пасс',
    FORM_CARD_NUMBER = 'Номер',
    SAVE = 'Сохранить',
    OK = 'OK',
    FORM_DELETE_TITLE_SKIPASS = 'Удаление ски-пасса',
    FORM_DATE_START = 'Начало действия',
    FORM_DATE_END = 'Коец действия',
    FORM_COST = 'Стоимость',
    DELETE_TEXT = 'Вы уверены, что хотите удалить карточку этого ски-пасса?',
    ACTION_TIME = 'Время действия',
    COST = 'Цена',
    ASSIGNE_VISITER = 'Назначенный посетитель',
    CARD_SKIPASS = 'Карточка ски-пасса',
    ALL = 'Все',
    BIRTHDAY = 'День рождения',
    NUMBER_SKIPASS = 'Номер ски-пасса',
    NUMBER_TYPE = 'number',
    SPORT = 'Вид спорта',
    BUTTON_ADD = 'Добавить',
    TITLE_ADD_NEW_VISITER = 'Добавить нового посетителя',
    SEARCH = 'Поиск',
    EXIT = 'Выход',
    SKI_RESORT = 'Горнолыжный курорт',
    START_WORK = 'День начала работы',
    SEX = 'Пол',
    CATEGORY = 'Категория',
    PERSONAL_ACCOUNT_TEXT = 'Личный кабинет',
    SKI_RESRORT_TEXT = 'горнолыжного курорта',
    NAME = 'Имя',
    PASSWORD = 'Пароль',
    LOGIN = 'Войти',
    REGISTRATION = 'Зарегистрироваться',
    COPYRIGHT = '(с) 2021. Все права защищены',
}
export enum i18nErrors {
    ERROR_EMPTY_START_WORK = 'Необходимо заполнить день начала работы',
    ERROR_EMPTY_CATEGORY = 'Необходимо заполнить категорию',
    ERROR_EMPTY_SEX = 'Необходимо выбрать пол',
    ERROR_ADD_USER = 'Ошибка добавления пользователя',
    ERROR_DATE_END_LT_DATE_START = 'Дата завершения меньше даты начала.',
    ERROR_CARD_NUMBER = 'Неверный номер карты.',
    ERROR_EMPTY_NAME = 'Необходимо заполнить ФИО',
    ERROR_EMPTY_NUMBER = 'Необходимо заполнить номер ски-пасса',
    ERROR_SKI_PASS_LEN = 'Ски-пасс должен быть 16-символьным',
    ERROR_SKI_PASS_NOT_FOUND = 'Такого ски-пасса не существует',
    ERROR_EMPTY_SPORT = 'Необходимо заполнить вид спорта',
    ERROR_EMPTY_BIRTHDAY = 'Необходимо заполнить день рождения',
    ERROR_LOGIN_PASSWORD = 'Проверьте правильность логина и пароля',
    ERROR_LOGIN = 'Введите имя',
    ERROR_PASSWORD = 'Введите пароль',
}