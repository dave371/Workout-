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

  const { orderNumber, totalPrice, datePlaced, isShipped, isDelivered, items } =
    orders[0];

  return (
    <div className="flex flex-col gap-5">
      <OrderCard
        orderNumber={orderNumber}
        items={items}
        totalPrice={totalPrice}
      />
    </div>
  );
}

function OrderCard({ orderNumber, items, totalPrice }) {
  return (
    <div className="flex gap-4 h-36">
      <OrderCardPicture imgUrl={items[0].picture} />
      <div className="w-full h-full ">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-lg font-bold">Order ID:</h1>
            <p className="text-base font-semibold">{orderNumber}</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-base font-medium text-gray-500 ">
              {items.length} Items
            </span>
            <div className="w-1 h-1 bg-gray-500 rounded-full" />
            <span className="text-base font-medium text-gray-500">
              ${totalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderCardPicture({ imgUrl }) {
  return (
    <div className="aspect-square">
      <Image
        src={imgUrl}
        alt="items ordered image"
        height={150}
        width={150}
        layout="responsive"
        className="rounded"
      />
    </div>
  );
}
