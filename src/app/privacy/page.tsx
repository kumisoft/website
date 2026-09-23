import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { company, formattedAddress } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy | Kumisoft",
  description: `How ${company.legalName} collects, uses and protects your information.`,
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="September 23, 2026">
      <p>
        This Privacy Policy explains how {company.legalName} (“Kumisoft”,
        “we”, “us”) collects, uses and protects information when you visit
        our website or contact us about our services.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you send us.</strong> When you email us or use
          our contact form, we receive your name, email address, project type
          and anything you include in your message. Contact form submissions
          are delivered to us by our form-processing provider, Web3Forms.
        </li>
        <li>
          <strong>Technical information.</strong> Our hosting provider
          automatically records standard server logs, such as IP address,
          browser type and the pages requested, to operate and secure the
          website.
        </li>
      </ul>
      <p>
        We do not use advertising or analytics cookies on this website, and
        we do not sell your personal information.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to your inquiries and provide quotes or services.</li>
        <li>To operate, maintain and secure our website.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We share information only with service providers that help us run our
        business (such as website hosting, email and contact form delivery),
        when required by law, or with your consent.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep correspondence for as long as needed to respond to you and
        manage our business relationship, and delete it when it is no longer
        needed.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us to access, correct or delete the personal information
        we hold about you by emailing{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>

      <h2>Apps and client projects</h2>
      <p>
        Applications we publish or build may have their own privacy policies,
        which will describe the data those apps collect.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date at the top of
        this page shows when it was last changed.
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
