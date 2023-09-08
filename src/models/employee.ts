import { AliAliZahid, DanielToran } from '../dumpCeoDesc'
class EmployeeModel {
    name!: string;
    position!: string;
    msg!: string;
}



const aliAliZahidModel: EmployeeModel = new EmployeeModel();
aliAliZahidModel.name = "AliAliZahid"
aliAliZahidModel.position = "Chief Executive Officer";
aliAliZahidModel.msg = AliAliZahid

const DanielToranModel: EmployeeModel = new EmployeeModel();
DanielToranModel.name = "DanielToran"
DanielToranModel.position = "Chief Digital Officer";
DanielToranModel.msg = DanielToran


export {

    aliAliZahidModel, DanielToranModel, EmployeeModel
}

