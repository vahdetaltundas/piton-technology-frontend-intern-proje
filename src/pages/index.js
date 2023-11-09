import AboutUs from "@/components/AboutUs";
import Header from "@/components/Header";
import SuccessMetrics from "@/components/SuccessMetrics";
import Employees from "@/components/persons/Employees";
import { useEffect, useState } from "react";
import { fetchEmployees } from "./api";
import ContactFrom from "@/components/ContactFrom";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  
  const getEmployees = async () => {
    try {
      const employees = await fetchEmployees();
      setEmployees(employees);
    } catch (error) {
      // Hata mesajı gönderirken burası kullanılır
      console.error("Api Çalıştırmayı unuttunuz");
    }
  };
  useEffect(() => {
    getEmployees();
  }, []);
  return (
   <>
    <Header/>
    <AboutUs/>
    <Employees employees={employees}/>
    <SuccessMetrics/>
    <ContactFrom/>
   </>
  )
}
