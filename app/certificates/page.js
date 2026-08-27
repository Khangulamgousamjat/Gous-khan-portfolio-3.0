// @flow strict
import { personalData } from "@/utils/data/personal-data";
import { redirect } from "next/navigation";

export default function CertificatesPage() {
  redirect(personalData.certificates);
}
