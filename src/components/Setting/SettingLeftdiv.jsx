import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

// import { ClipboardIcon } from "@heroicons/24/outline";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { ReceiptRefundIcon } from "@heroicons/react/24/outline";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { DocumentCheckIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "Subscription",
    href: "#",
  },
  {
    name: "Usage",
    href: "#",
  },
  {
    name: "Team MEmber",
    href: "#",
  },
  {
    name: "Invoices",
    href: "#",
  },
  {
    name: "User Profile",
    href: "#",
  },
  {
    name: "Billing Details",
    href: "#",
  },
  {
    name: "Brand Assets",
    description: "",
    href: "#",
  },
];

export default function SettingLeftdiv() {
  const [show, setShow] = useState(false);
  return (
    <Popover className="relative">
      <Popover.Button
        onClick={() => setShow(!show)}
        className="w-full border-t-[1px] bg-[#0B1A2880] py-4 rounded-lg px-2 flex items-center justify-between gap-x-1 text-sm font-semibold leading-6 "
      >
        <div className="flex justify-between items-center  px-3">
          <div className="flex gap-3 p-2  items-center">
            <span>
              <button className="px-5 py-3 rounded-full bg-[#2EABAF] font-bold">
                A
              </button>
            </span>
            <div>
              <h1 className="text-base text-left font-[Teko] font-bold uppercase">
                AIM
              </h1>
              <p className="text-base font-light font-[Rubik]">No Plan</p>
            </div>
          </div>
        </div>
        {show ? (
          <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 " aria-hidden="true" />
        )}
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel>
          <div className=" bg-[#0B1A2880] px-6  rounded-b-xl">
            <div className="relative rounded-lg p-4 hover:bg-[#1e354b80]  flex items-center">
              <span className="px-2 py-[5px] font-bold rounded-full bg-[#2EABAF] text-[8px] ">
                A
              </span>
              <p className="font-semibold text-[#fff] pl-4 uppercase">
                edit profile
              </p>
            </div>
            <div className="relative rounded-lg p-4 hover:bg-[#1e354b80]  flex items-center">
              <span className="px-2 py-[6px] font-bold rounded-full bg-[#2EABAF] text-[8px] ">
                TJ
              </span>
              <p className="font-semibold text-[#fff] pl-4 uppercase">
                Team profile
              </p>
            </div>
            <div className="relative rounded-lg p-4 hover:bg-[#1e354b80]  flex">
              <DocumentCheckIcon className="h-6 w-6 text-white" />

              <p className="font-semibold text-[#fff] pl-4 uppercase">
                SUBSCRIPTION
              </p>
            </div>
            <div className="relative rounded-lg p-4 hover:bg-[#1e354b80]  flex">
              <CalendarDaysIcon className="h-6 w-6 text-white" />

              <p className="font-semibold text-[#fff] pl-4 uppercase">
                Integrations
              </p>
            </div>
            <div className="relative rounded-lg p-4 hover:bg-[#1e354b80]  flex">
              <CurrencyDollarIcon className="h-6 w-6 text-white" />
              <p className="font-semibold text-[#fff] pl-4 uppercase">
                Billing Details
              </p>
            </div>
            <div className="relative rounded-lg p-4 hover:bg-[#1e354b80]  flex">
              <CreditCardIcon className="h-6 w-6 text-white" />

              <p className="font-bold text-[#fff] pl-4 uppercase">
                Payment methods
              </p>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
