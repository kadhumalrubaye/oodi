import { AliAliZahid, DanielToran } from '../dumpCeoDesc'
class EmployeeModel {
    name!: string;
    position!: string;
    msg!: string;
    img!: string;
    footer!: string;
}



const aliAliZahidModel: EmployeeModel = new EmployeeModel();
aliAliZahidModel.name = "Ali Al-Zahid"
aliAliZahidModel.position = "Chief Executive Officer";
aliAliZahidModel.msg = AliAliZahid
aliAliZahidModel.footer = "Wishing you all afantastic quarter ahead!"

const DanielToranModel: EmployeeModel = new EmployeeModel();
DanielToranModel.name = "Daniel Turan"
DanielToranModel.position = "Chief Digital Officer";
DanielToranModel.msg = DanielToran
DanielToranModel.footer = "Let us know what you think \n digital@iq.zain.com "



export {

    aliAliZahidModel, DanielToranModel, EmployeeModel
}

