import React, { useState } from 'react';
import { MOCK_ORDERS } from './data/mockOrders';
import StateSwitcherBar from './components/StateSwitcherBar';
import MobileFrame from './components/MobileFrame';
import StatusHeader from './components/StatusHeader';
import DeliveryMap from './components/DeliveryMap';
import ProgressTimeline from './components/ProgressTimeline';
import SupportActions from './components/SupportActions';
import OrderSummary from './components/OrderSummary';
import MissingItemModal from './components/MissingItemModal';
import SupportChatModal from './components/SupportChatModal';
import DeliveryPhotoModal from './components/DeliveryPhotoModal';
import RescheduleModal from './components/RescheduleModal';
import AlertModal from './components/AlertModal';
import SkeletonLoader from './components/SkeletonLoader';
import ErrorView from './components/ErrorView';

export default function App() {
  const [activeState, setActiveState] = useState('out_for_delivery');
  const [viewMode, setViewMode] = useState('mobile'); // 'mobile' or 'full'
  const [ordersData, setOrdersData] = useState(MOCK_ORDERS);

  // Modals visibility state
  const [isMissingModalOpen, setIsMissingModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  // Current order selected
  const currentOrder = ordersData[activeState] || ordersData['out_for_delivery'];

  const handleRefresh = () => {
    const prevState = activeState;
    setActiveState('loading');
    setTimeout(() => {
      setActiveState(prevState);
    }, 700);
  };

  const handleContactDriver = (actionType) => {
    if (actionType === 'call') {
      alert(`Dialing driver ${currentOrder.carrier?.driverName} at ${currentOrder.carrier?.driverPhone}...`);
    } else {
      setIsChatOpen(true);
    }
  };

  const handleConfirmReschedule = (newDate, newSlot) => {
    setOrdersData(prev => ({
      ...prev,
      delayed: {
        ...prev.delayed,
        estimatedDelivery: `Rescheduled: ${newDate}`,
        timeWindow: newSlot,
        timeline: [
          {
            id: 'rescheduled-1',
            status: `Rescheduled by Customer for ${newDate}`,
            location: 'Customer Request Logged',
            timestamp: 'Just now',
            completed: true,
            active: true,
            description: `Carrier slot updated to ${newSlot}.`
          },
          ...prev.delayed.timeline
        ]
      }
    }));
  };

  return (
    <div className="tracking-ui min-h-screen bg-[#f4f5f2] text-slate-900 flex flex-col font-sans">
      {/* Scenario & State Switcher Top Banner */}
      <StateSwitcherBar
        activeState={activeState}
        setActiveState={setActiveState}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {/* Main Content Area (Wrapped in Responsive Mobile Frame) */}
      <main className="flex-1 w-full flex items-center justify-center">
        <MobileFrame
          viewMode={viewMode}
          onRefresh={handleRefresh}
          orderId={currentOrder?.id}
        >
          {activeState === 'loading' ? (
            <SkeletonLoader />
          ) : activeState === 'error' ? (
            <ErrorView
              onRetry={handleRefresh}
              onOpenChat={() => setIsChatOpen(true)}
            />
          ) : (
            <div className="pb-8 space-y-1">
              {/* Primary Status Header Card */}
              <StatusHeader
                order={currentOrder}
                onViewPhoto={() => setIsPhotoOpen(true)}
              />

              {/* Interactive Vector Route Map */}
              <DeliveryMap
                order={currentOrder}
                onContactDriver={handleContactDriver}
              />

              {/* Connected Step Progress Timeline */}
              <ProgressTimeline order={currentOrder} />

              {/* Contextual Support Action Hub */}
              <SupportActions
                order={currentOrder}
                onRequestReportMissing={() => setIsMissingModalOpen(true)}
                onRequestReschedule={() => setIsRescheduleOpen(true)}
                onRequestAlerts={() => setIsAlertModalOpen(true)}
                onOpenChat={() => setIsChatOpen(true)}
              />

              {/* Expandable Product Order Summary */}
              <OrderSummary order={currentOrder} />
            </div>
          )}
        </MobileFrame>
      </main>

      {/* Interactive Modals & Sheet Overlays */}
      <MissingItemModal
        isOpen={isMissingModalOpen}
        onClose={() => setIsMissingModalOpen(false)}
        order={currentOrder}
      />

      <SupportChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        order={currentOrder}
      />

      <DeliveryPhotoModal
        isOpen={isPhotoOpen}
        onClose={() => setIsPhotoOpen(false)}
        order={currentOrder}
      />

      <RescheduleModal
        isOpen={isRescheduleOpen}
        onClose={() => setIsRescheduleOpen(false)}
        onConfirmReschedule={handleConfirmReschedule}
      />

      <AlertModal
        isOpen={isAlertModalOpen}
        onClose={() => setIsAlertModalOpen(false)}
      />
    </div>
  );
}
