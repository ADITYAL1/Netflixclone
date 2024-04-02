export const ValidatesignIn= (email, password)=>{
  
   const vemail=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
   const vpassword=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
   if(!vemail)return "Email Is Not Valid";
   if(!vpassword) return "Password Is Not Valid";
  
   return null;
   }
export const Validatesignup= (email, password,name)=>{
      const vname= /^[a-zA-Z]+([a-zA-Z](_|-| )[a-zA-Z])*[a-zA-Z]+$/.test(name);
      const vemail=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
      const vpassword=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
      if(!vemail)return "Email Is Not Valid";
      if(!vpassword) return "Password Is Not Valid";
      if(!vname)return "Not a valid Name";
      return null;
      }