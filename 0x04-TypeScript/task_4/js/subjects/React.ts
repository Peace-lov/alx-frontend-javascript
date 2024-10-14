/// <reference path="Teacher.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list of reguirements for React";
        }

        getAvailableTeacher(): string {
            const XP = this.getAvailableTeacher.experienceTeachingReact;
            return XP > 0? `Available Teacher: ${this.getAvailableTeacher.firstName}` : "No available teacher";
        }
    }
}