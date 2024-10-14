/// <reference path="Teacher.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            const XP = this.getAvailableTeacher.experienceTeachingJava;
            return XP > 0 ? `Available Teacher: ${this.getAvailableTeacher.firstName}` : "No available teacher";
        }
    }
}