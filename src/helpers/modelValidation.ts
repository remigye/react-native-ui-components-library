enum Result {
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export class RuleViolation {
  code: string | null;
  message: string;

  constructor(code: string | null = null, message: string) {
    this.code = code;
    this.message = message;
  }
}

export class ModelValidation {
  // Status "success", "warning", "error"
  result: Result;

  // A clear message for user understanding
  message: string;

  // key=>value dictionary which retrieve all missing/wrong values
  violations: Array<RuleViolation>;

  data?: Object;

  constructor(
    result: Result = Result.success,
    message: string = '',
    violations: Array<RuleViolation> = []
  ) {
    this.result = result;
    this.message = message;
    this.violations = violations;
  }

  // Axios catch default error
  static axiosErr() {
    return new ModelValidation(
      Result.error,
      'Une erreur est survenue. Veuillez réessayer'
    );
  }

  isError(field: string): boolean {
    return this.violations.some((el) => el.code === field);
  }

  isErrorMessage(field: string): string | undefined {
    return this.violations.find((el) => {
      return el.code === field;
    })?.message;
  }

  generalMessage() {
    const values = this.violations.map((el) => el.message);
    const mapped_values = values.join(' ');
    return this.message + ' ' + mapped_values;
  }
}
