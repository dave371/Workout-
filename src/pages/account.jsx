import Image from 'next/image';
import { useState } from 'react';
import DefaultPageLayout from '../ui/default-page-layout';

const Account = () => {
  return (
    <div>
      <DefaultPageLayout>
        <UserInfoPage />
      </DefaultPageLayout>
    </div>
  );
};

export default Account;

function UserInfoPage() {
  const person = {
    name: 'David Pacheco',
    email: 'themotion004@gmail.com',
    managed: 'Google',
  };

  // state
  const [accountActiveTab, setAccountActiveTab] = useState(true);
  const [orderActiveTab, setOrderActiveTab] = useState(false);

  //active / not active styles for tabs
  const activeTabClass = 'border-b-[2px] border-b-accent-two';
  const notActiveTabClass = 'opacity-80';

  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex">
        <h1
          onClick={() => {
            if (!accountActiveTab) {
              setOrderActiveTab((prev) => !prev);
              setAccountActiveTab((prev) => !prev);
            }

            return;
          }}
          className={`px-2 py-1 text-lg font-semibold text-black bg-white rounded-t ${
            accountActiveTab ? activeTabClass : notActiveTabClass
          }`}
        >
          Account
        </h1>
        <h1
          onClick={() => {
            if (!orderActiveTab) {
              setAccountActiveTab((prev) => !prev);
              setOrderActiveTab((prev) => !prev);
            }

            return;
          }}
          className={`px-2 py-1 text-lg font-semibold text-black bg-white rounded-t ${
            orderActiveTab ? activeTabClass : notActiveTabClass
          }`}
        >
          Order History
        </h1>
      </div>

      <div className="flex-1 w-full h-full px-2 py-3 text-black bg-white rounded-b rounded-r">
        {accountActiveTab && <AccountInfo person={person} />}
        {orderActiveTab && <OrderHistory />}
      </div>
    </div>
  );
}

function AccountInfo({ person }) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-medium">Name</h1>
        <p className="text-lg font-normal">{person.name}</p>
        <span className="text-sm text-blue-700">Change Name</span>
      </div>

      <div>
        <h1 className="text-xl font-medium">Email</h1>
        <p className="text-lg font-normal">{person.email}</p>
        <span className="text-sm font-medium">
          Managed by: {person.managed}
        </span>
      </div>

      <div>
        <h1 className="mb-2 text-xl font-medium">Account</h1>
        <button className="px-2 py-1 text-white bg-red-600 rounded">
          Delete Account
        </button>
      </div>
    </div>
  );
}

function OrderHistory() {
  const orders = [
    {
      orderNumber: '#AREAS123134AS',
      totalPrice: 123,
      datePlaced: Date(),
      isShipped: true,
      isDelivered: false,
      items: [
        {
          name: 'A Shirt',
          size: 'M',
          price: 12,
          picture:
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
        },
      ],
    },
  ];

  const { orderNumber, totalPrice, datePlaced, isShipped, isDelivered } =
    orders[0];

  return (
    <div className="flex flex-col gap-8">
      <OrderCard isShipped={isShipped} isDelivered={isDelivered}>
        <OrderItemCard />
        <OrderItemCard />
        <OrderItemCard />
        <OrderItemCard />
      </OrderCard>

      <OrderCard isShipped={isShipped} isDelivered={isDelivered}>
        <OrderItemCard />
        <OrderItemCard />
        <OrderItemCard />
        <OrderItemCard />
      </OrderCard>
    </div>
  );
}

function OrderCard({ children, isShipped, isDelivered }) {
  return (
    <div className="flex flex-col w-full h-full">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-medium">Order Number:</h1>
            <p className="font-bold">#123HK321123H</p>
          </div>

          <div>
            <h1 className="text-lg font-medium">Status:</h1>
            <p className="font-bold">Delivered</p>
          </div>
        </div>

        {isShipped && !isDelivered && (
          <div className="mt-5">
            <h1 className="text-lg font-medium">Tracking Number</h1>
            <p className="font-bold">#ADA123N2LNFNBN12</p>
          </div>
        )}

        <div className="w-full h-[2px] bg-primary my-2" />

        <div className="flex flex-col gap-5">{children}</div>
      </div>
    </div>
  );
}

function OrderItemCard() {
  return (
    <div className="flex items-center">
      <div className="w-2/6 py-1">
        <Image
          src={'/temp.png'}
          alt="item picture"
          width={200}
          height={200}
          layout="responsive"
          className="rounded"
        />
      </div>

      <p className="w-2/6 ml-2">Orange</p>

      <p>$12</p>

      <button className="flex-1 px-2 py-1 ml-2 text-white rounded bg-primary">
        View
      </button>
    </div>
  );
}
