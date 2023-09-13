import { AliAliZahid, DanielToran } from '../dumpCeoDesc'
class EmployeeModel {
    name!: string;
    position!: string;
    msg!: string;
    img!:string;
    footer!:string;
}



const aliAliZahidModel: EmployeeModel = new EmployeeModel();
aliAliZahidModel.name = "AliAliZahid"
aliAliZahidModel.position = "Chief Executive Officer";
aliAliZahidModel.msg = AliAliZahid
aliAliZahidModel.footer="Wishing you all afantastic quarter ahead!"

const DanielToranModel: EmployeeModel = new EmployeeModel();
DanielToranModel.name = "DanielToran"
DanielToranModel.position = "Chief Digital Officer";
DanielToranModel.msg = DanielToran
DanielToranModel.footer="Let us know what youthink \n digital@iq.zain.com "


export {

    aliAliZahidModel, DanielToranModel, EmployeeModel
}

