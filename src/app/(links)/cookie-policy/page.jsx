import React from "react";

const CookiePolicy = () => {
  return (
    <div className="py-12 bg-base flex justify-center items-center h-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-300 my-16 text-center ">
          Cookie Policy for Agilesaas
        </h1>

        <p className="mb-6">
          This is the Cookie Policy for Agilesaas, accessible from{" "}
          <a href="https://agilesaas.netlify.app/" className="text-blue-500">
            https://agilesaas.netlify.app/
          </a>
        </p>

        <div className="mb-6">
          <p className="font-semibold">What Are Cookies</p>

          <p>
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or
            &apos;break&apos; certain elements of the sites functionality.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-semibold">How We Use Cookies</p>

          <p>
            We use cookies for a variety of reasons detailed below.
            Unfortunately in most cases there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case they are used to provide a service that you use.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-semibold">Disabling Cookies</p>

          <p>
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of the
            this site. Therefore it is recommended that you do not disable
            cookies. This Cookies Policy was created with the help of the{" "}
            <a
              href="https://www.cookiepolicygenerator.com/cookie-policy-generator/"
              className="text-blue-500"
            >
              Cookies Policy Generator
            </a>
            .
          </p>
        </div>

        <div className="mb-6">
          <p className="font-semibold">The Cookies We Set</p>

          <ul className="list-disc pl-8">
            <li>
              <p>Account related cookies</p>
              <p>
                If you create an account with us then we will use cookies for
                the management of the signup process and general administration.
                These cookies will usually be deleted when you log out however
                in some cases they may remain afterwards to remember your site
                preferences when logged out.
              </p>
            </li>
            <li>
              <p>Login related cookies</p>
              <p>
                We use cookies when you are logged in so that we can remember
                this fact. This prevents you from having to log in every single
                time you visit a new page. These cookies are typically removed
                or cleared when you log out to ensure that you can only access
                restricted features and areas when logged in.
              </p>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-semibold">Third Party Cookies</p>

          <p>
            In some special cases we also use cookies provided by trusted third
            parties. The following section details which third party cookies you
            might encounter through this site.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-semibold">More Information</p>

          <p>
            Hopefully that has clarified things for you and as was previously
            mentioned if there is something that you aren&apos;t sure whether
            you need or not it&apos;s usually safer to leave cookies enabled in
            case it does interact with one of the features you use on our site.
          </p>
        </div>

        <div className="mb-6">
          <p>
            However if you are still looking for more information then you can
            contact us through one of our preferred contact methods:
          </p>

          <ul className="list-disc pl-8">
            <li>
              By visiting this link:{" "}
              <a
                href="https://agilesaas.netlify.app/contact"
                className="text-blue-500"
              >
                https://agilesaas.netlify.app/contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
