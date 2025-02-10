// schemas/order.js

export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      // User Information (fetched from Clerk)
      {
        name: 'userID',
        title: 'User ID',
        type: 'string',
        description: 'Identifier for the user placing the order',
      },
  
      // Customer Details
      {
        name: 'customer',
        title: 'Customer Information',
        type: 'object',
        fields: [
          {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
          },
          {
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
          },
          {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            description: 'Optional',
          },
          {
            name: 'email',
            title: 'Email',
            type: 'string',
          },
          {
            name: 'phone',
            title: 'Phone',
            type: 'string',
          },
        ],
      },
  
      // Shipping Address
      {
        name: 'shippingAddress',
        title: 'Shipping Address',
        type: 'object',
        fields: [
          {
            name: 'country',
            title: 'Country',
            type: 'string',
          },
          {
            name: 'province',
            title: 'Province/State',
            type: 'string',
          },
          {
            name: 'city',
            title: 'City',
            type: 'string',
          },
          {
            name: 'streetAddress',
            title: 'Street Address',
            type: 'string',
          },
          {
            name: 'zipCode',
            title: 'Zip Code',
            type: 'string',
          },
        ],
      },
  
      // Order Products
      {
        name: 'orderProducts',
        title: 'Order Products',
        type: 'array',
        of: [
          {
            type: 'object',
            title: 'Product',
            fields: [
              {
                name: 'productID',
                title: 'Product ID',
                type: 'string',
              },
              {
                name: 'productName',
                title: 'Product Name',
                type: 'string',
              },
              {
                name: 'size',
                title: 'Size',
                type: 'string',
                description: 'Optional',
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
              },
              {
                name: 'pricePerUnit',
                title: 'Price Per Unit',
                type: 'number',
              },
              {
                name: 'totalPrice',
                title: 'Total Price',
                type: 'number',
                description: 'Calculated as quantity * pricePerUnit',
              },
            ],
          },
        ],
      },
  
      // Payment and Order Status Details
      {
        name: 'paymentMethod',
        title: 'Payment Method',
        type: 'string',
        description: 'e.g., Credit Card, PayPal, Stripe, Cash on Delivery',
      },
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        description: 'e.g., Paid, Pending, Failed, Refunded',
      },
      {
        name: 'orderStatus',
        title: 'Order Status',
        type: 'string',
        description: 'e.g., Pending, Processing, Shipped, Delivered, Cancelled, Refunded',
      },
    ],
  };
  