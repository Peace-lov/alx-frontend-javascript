/// <reference path="Teacher.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }
        getAvailableTeacher(): string {
            const XP = this.getAvailableTeacher.experienceTeachingC;
            if (XP > 0) {
                return `Available Teacher: ${this.getAvailableTeacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}