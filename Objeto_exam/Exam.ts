export class Weight {
  constructor(public values: number[]) {}
}

export class Answer {
  constructor(
    public student: string,
    public responses: string[] 
  ) {}
}

export class Exam{
   private weight: Weight;
   private answer: Answer;
   private exams: Answer[];


   constructor(answer: Answer, weight: Weight) {
       this.weight = weight;
       this.answer = answer;
       this.exams = [];
   }
   add(exam: Answer): void {
       this.exams.push(exam);
   }
   private calculateGrade(exam: Answer): number {
    return exam.responses.reduce((total, resp, index) => {
      if (resp === this.answer.responses[index] && this.weight.values[index] !== undefined) {
        return total + this.weight.values[index];
      }
      return total;
    }, 0);
  }

   max(count: number = 1): number[] {
    const grades = this.exams.map(a => this.calculateGrade(a));
    return grades.sort((a, b) => b - a).slice(0, count);
  }
   min(count: number = 1): number[] {
    const grades = this.exams.map(a => this.calculateGrade(a));
    return grades.sort((a, b) => a - b).slice(0, count);
   }
   avg(): number {
    if (this.exams.length === 0) return 0;
    const total = this.exams.reduce((acc, a) => acc + this.calculateGrade(a), 0);
    return total / this.exams.length;
  }

  lt(value: number): number[] {
    return this.exams
      .map(a => this.calculateGrade(a))
      .filter(grade => grade < value);
  }
  gt(value: number): number[] {
    return this.exams
      .map(a => this.calculateGrade(a))
      .filter(grade => grade > value);
  }

}
