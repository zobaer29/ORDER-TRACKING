export const MOCK_ORDERS = {
  out_for_delivery: {
    id: "ORD-9842-X9",
    stateType: "out_for_delivery",
    title: "Out for Delivery",
    subtitle: "Your courier is nearby",
    customerEmail: "ummayjannatsadia@gmail.com",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    badgePulse: true,
    estimatedDelivery: "Today, Sep 22",
    timeWindow: "2:30 PM - 4:15 PM",
    etaMinutesRemaining: 24,
    carrier: {
      name: "FedEx Express",
      trackingNumber: "7734 8291 6045",
      driverName: "Nadia Rahman",
      driverPhone: "+1 (555) 382-9901",
      driverPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      vehicle: "White Mercedes Sprinter (Lic: 7XYZ89)",
      stopsAway: 3,
    },
    items: [
      {
        id: "item-1",
        name: "SonicPro Wireless Headphones",
        variant: "Midnight Black • Active Noise Cancelling",
        price: 249.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "item-2",
        name: "MagSafe Leather Charging Case",
        variant: "Saddle Brown",
        price: 49.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=300&q=80"
      }
    ],
    pricing: {
      subtotal: 298.99,
      shipping: 0.00,
      tax: 23.92,
      total: 322.91
    },
    shippingAddress: {
      name: "Ummay Jannat Sadia",
      street: "742 Evergreen Terrace, Apt 4B",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
      instructions: "Gate Code #4920. Please leave with concierge if no response."
    },
    timeline: [
      {
        id: 1,
        status: "Out for Delivery",
        location: "San Francisco Logistics Hub",
        timestamp: "Today, 08:30 AM",
        completed: true,
        active: true,
        description: "Courier Nadia Rahman loaded your package into the delivery van."
      },
      {
        id: 2,
        status: "Arrived at Local Sort Center",
        location: "Oakland Sorting Hub, CA",
        timestamp: "Yesterday, 11:15 PM",
        completed: true,
        active: false,
        description: "Package processed and cleared for morning dispatch."
      },
      {
        id: 3,
        status: "Shipped & In Transit",
        location: "Sacramento Transit Depot",
        timestamp: "Sep 20, 04:45 PM",
        completed: true,
        active: false,
        description: "Departed main regional fulfillment facility."
      },
      {
        id: 4,
        status: "Order Processed & Packed",
        location: "Fulfillment Center #3",
        timestamp: "Sep 19, 02:10 PM",
        completed: true,
        active: false,
        description: "Payment verified and custom box sealed."
      }
    ]
  },

  delayed: {
    id: "ORD-7193-D4",
    stateType: "delayed",
    title: "Delivery Delayed in Transit",
    subtitle: "Severe weather route redirection",
    customerEmail: "ummayjannatsadia@gmail.com",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    badgePulse: true,
    estimatedDelivery: "Revised: Thu, Sep 24",
    timeWindow: "By 6:00 PM",
    delayReason: "Severe storm disruption at Salt Lake Mountain Hub causing flight groundings. Package is safe and moving via priority ground network.",
    carrier: {
      name: "UPS Next Day Air",
      trackingNumber: "1Z9999999999999999",
      driverName: "Pending Assignment",
      driverPhone: null,
      driverPhoto: null,
      vehicle: "In Hub Dispatch Queue",
      stopsAway: null
    },
    items: [
      {
        id: "item-3",
        name: "Ergonomic Mechanical Keyboard",
        variant: "RGB Backlit • Hot-swappable tactile switches",
        price: 189.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80"
      }
    ],
    pricing: {
      subtotal: 189.00,
      shipping: 12.00,
      tax: 16.08,
      total: 217.08
    },
    shippingAddress: {
      name: "Ummay Jannat Sadia",
      street: "742 Evergreen Terrace, Apt 4B",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
      instructions: "Leave package at front porch."
    },
    timeline: [
      {
        id: 1,
        status: "Delivery Delayed in Transit",
        location: "Salt Lake City Air Hub, UT",
        timestamp: "Today, 06:12 AM",
        completed: false,
        active: true,
        isWarning: true,
        description: "Weather delay: Flight rerouted. Expected arrival adjusted to Sep 24."
      },
      {
        id: 2,
        status: "Arrived at Sorting Hub",
        location: "Salt Lake City Air Hub, UT",
        timestamp: "Sep 21, 09:40 PM",
        completed: true,
        active: false,
        description: "Package scanned into main air terminal."
      },
      {
        id: 3,
        status: "In Transit",
        location: "Denver Gateway Facility",
        timestamp: "Sep 20, 01:20 PM",
        completed: true,
        active: false,
        description: "En route to west coast sorting hub."
      },
      {
        id: 4,
        status: "Order Confirmed & Shipped",
        location: "Chicago Fulfillment Hub",
        timestamp: "Sep 19, 10:00 AM",
        completed: true,
        active: false,
        description: "Dispatched via air express."
      }
    ]
  },

  delivered_not_received: {
    id: "ORD-6021-M2",
    stateType: "delivered_not_received",
    title: "Delivered (Not Received)",
    subtitle: "Marked delivered today at 11:42 AM",
    customerEmail: "ummayjannatsadia@gmail.com",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    badgePulse: false,
    estimatedDelivery: "Delivered Today",
    timeWindow: "11:42 AM",
    deliveryProof: {
      deliveredAt: "11:42 AM",
      locationNote: "Front Porch / Mail Slot",
      photoUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      signedBy: "Left at front door (No signature required)"
    },
    carrier: {
      name: "DHL Express",
      trackingNumber: "DHL-4482-9901",
      driverName: "Courier #418",
      driverPhone: null,
      driverPhoto: null,
      vehicle: "Delivery Van",
      stopsAway: 0
    },
    items: [
      {
        id: "item-4",
        name: "Ultra-Lightweight Running Shoes",
        variant: "Neon Blue / White • Size 10.5",
        price: 135.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80"
      },
      {
        id: "item-5",
        name: "Hydration Sports Bottle 1L",
        variant: "Matte Black Stainless Steel",
        price: 28.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=300&q=80"
      }
    ],
    pricing: {
      subtotal: 163.00,
      shipping: 0.00,
      tax: 13.04,
      total: 176.04
    },
    shippingAddress: {
      name: "Ummay Jannat Sadia",
      street: "742 Evergreen Terrace, Apt 4B",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
      instructions: "Ring doorbell upon delivery."
    },
    timeline: [
      {
        id: 1,
        status: "Delivered",
        location: "San Francisco, CA (Front Door)",
        timestamp: "Today, 11:42 AM",
        completed: true,
        active: false,
        isSuccess: true,
        description: "Package dropped off at front porch. Photo proof captured."
      },
      {
        id: 2,
        status: "Out for Delivery",
        location: "San Francisco Local Hub",
        timestamp: "Today, 07:15 AM",
        completed: true,
        active: false,
        description: "Loaded into courier van for delivery run."
      },
      {
        id: 3,
        status: "Arrived at Destination Facility",
        location: "SF Airport Hub",
        timestamp: "Yesterday, 08:30 PM",
        completed: true,
        active: false,
        description: "Scanned and sorted for final delivery."
      },
      {
        id: 4,
        status: "Order Confirmed",
        location: "Fulfillment Hub",
        timestamp: "Sep 20, 09:00 AM",
        completed: true,
        active: false,
        description: "Order placed & processed."
      }
    ]
  },

  tracking_not_available: {
    id: "ORD-3104-P8",
    stateType: "tracking_not_available",
    title: "Preparing for Dispatch",
    subtitle: "Tracking code generating soon",
    customerEmail: "ummayjannatsadia@gmail.com",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    badgePulse: true,
    estimatedDelivery: "Estimated Dispatch: Within 12-24 Hrs",
    timeWindow: "Expected arrival by Sep 25-26",
    carrier: {
      name: "Carrier Assignment Pending",
      trackingNumber: "Generating...",
      driverName: null,
      driverPhone: null,
      driverPhoto: null,
      vehicle: null,
      stopsAway: null
    },
    items: [
      {
        id: "item-6",
        name: "Smart Watch Series 9",
        variant: "Titanium Case • Sport Loop",
        price: 399.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80"
      }
    ],
    pricing: {
      subtotal: 399.00,
      shipping: 0.00,
      tax: 31.92,
      total: 430.92
    },
    shippingAddress: {
      name: "Ummay Jannat Sadia",
      street: "742 Evergreen Terrace, Apt 4B",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
      instructions: "Direct delivery to recipient."
    },
    timeline: [
      {
        id: 1,
        status: "Preparing in Warehouse",
        location: "Main Fulfillment Depot, TX",
        timestamp: "Today, 02:15 PM",
        completed: true,
        active: true,
        description: "Items picked and undergoing final quality inspection before carrier pickup."
      },
      {
        id: 2,
        status: "Payment Confirmed",
        location: "Online Checkout",
        timestamp: "Today, 01:30 PM",
        completed: true,
        active: false,
        description: "Payment processed successfully via Visa ending in •••• 4912."
      },
      {
        id: 3,
        status: "Order Placed",
        location: "E-Commerce Store",
        timestamp: "Today, 01:28 PM",
        completed: true,
        active: false,
        description: "We've received your order and sent a confirmation email."
      }
    ]
  }
};
