import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { company, formattedAddress } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms of Service | Kumisoft",
  description: `Terms governing the use of the ${company.legalName} website.`,
};

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="September 23, 2026">
      <p>
        These Terms of Service govern your use of the website operated by{" "}
        {company.legalName} (“Kumisoft”, “we”, “us”). By using this website,
        you agree to these terms.
      </p>

      <h2>Use of the website</h2>
      <p>
        You may use this website for lawful purposes only. You agree not to
        interfere with its operation or attempt to gain unauthorized access to
        it.
      </p>

      <h2>Services</h2>
      <p>
        The information on this website describes the services we offer and
        is not a binding offer. Any development or consulting work is governed
        by a separate written agreement between you and {company.legalName}.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The content, design and branding of this website belong to{" "}
        {company.legalName} and may not be copied or reused without our
        permission.
      </p>

      <h2>Disclaimer</h2>
      <p>
        This website is provided “as is”, without warranties of any kind. We
        do not guarantee that it will always be available or error-free.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, {company.legalName} is not liable for
        any indirect or consequential damages arising from your use of this
        website.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Wyoming, United
        States.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. The date at the top of
        this page shows when they were last changed.
      </p>

      <h2>Contact</h2>
      <p>
        {company.legalName}
        <br />
        {formattedAddress}
        <br />
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>
    </LegalPage>
  );
}
