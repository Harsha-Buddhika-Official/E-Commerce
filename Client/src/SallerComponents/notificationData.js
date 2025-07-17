import { ShoppingCart, DollarSign, AlertCircle, Eye, Settings, Package, Users, TrendingUp, Mail, Bell } from 'lucide-react';

// Mock notifications data
export const initialNotifications = [
  {
    id: 1,
    type: 'order',
    title: 'New Order Received',
    message: 'Order #ORD-004 from Sarah Wilson for $149.99',
    time: '2 minutes ago',
    read: false,
    icon: ShoppingCart,
    color: 'text-blue-400',
    priority: 'high'
  },
  {
    id: 2,
    type: 'payment',
    title: 'Payment Processed',
    message: 'Payment of $299.99 has been successfully processed',
    time: '15 minutes ago',
    read: false,
    icon: DollarSign,
    color: 'text-green-400',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'stock',
    title: 'Low Stock Alert',
    message: 'Wireless Headphones stock is running low (5 remaining)',
    time: '1 hour ago',
    read: true,
    icon: AlertCircle,
    color: 'text-yellow-400',
    priority: 'high'
  },
  {
    id: 4,
    type: 'review',
    title: 'New Product Review',
    message: 'Smart Watch received a 5-star review from Mike Johnson',
    time: '2 hours ago',
    read: true,
    icon: Eye,
    color: 'text-purple-400',
    priority: 'low'
  },
  {
    id: 5,
    type: 'system',
    title: 'Profile Updated',
    message: 'Your seller profile has been successfully updated',
    time: '1 day ago',
    read: true,
    icon: Settings,
    color: 'text-emerald-400',
    priority: 'low'
  },
  {
    id: 6,
    type: 'order',
    title: 'Order Shipped',
    message: 'Order #ORD-002 has been shipped via FedEx',
    time: '2 days ago',
    read: true,
    icon: Package,
    color: 'text-blue-400',
    priority: 'medium'
  },
  {
    id: 7,
    type: 'customer',
    title: 'New Customer Registration',
    message: 'Alex Thompson just created a new account',
    time: '3 days ago',
    read: true,
    icon: Users,
    color: 'text-cyan-400',
    priority: 'low'
  },
  {
    id: 8,
    type: 'analytics',
    title: 'Monthly Report Available',
    message: 'Your November sales report is ready for review',
    time: '1 week ago',
    read: true,
    icon: TrendingUp,
    color: 'text-orange-400',
    priority: 'medium'
  },
  {
    id: 9,
    type: 'message',
    title: 'Customer Message',
    message: 'You have a new message from Emma Davis regarding Order #ORD-001',
    time: '1 week ago',
    read: true,
    icon: Mail,
    color: 'text-pink-400',
    priority: 'medium'
  },
  {
    id: 10,
    type: 'stock',
    title: 'Stock Replenished',
    message: 'Bluetooth Speaker inventory has been restocked (50 units added)',
    time: '2 weeks ago',
    read: true,
    icon: Package,
    color: 'text-green-400',
    priority: 'low'
  }
];

// Notification type configurations
export const notificationTypes = {
  order: {
    icon: ShoppingCart,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20',
    label: 'Order'
  },
  payment: {
    icon: DollarSign,
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
    label: 'Payment'
  },
  stock: {
    icon: AlertCircle,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/20',
    label: 'Stock Alert'
  },
  review: {
    icon: Eye,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20',
    label: 'Review'
  },
  system: {
    icon: Settings,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/20',
    label: 'System'
  },
  customer: {
    icon: Users,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/20',
    label: 'Customer'
  },
  analytics: {
    icon: TrendingUp,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/20',
    label: 'Analytics'
  },
  message: {
    icon: Mail,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/20',
    label: 'Message'
  }
};

// Priority levels
export const priorityLevels = {
  high: {
    color: 'text-red-400',
    bgColor: 'bg-red-500/20',
    label: 'High Priority'
  },
  medium: {
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/20',
    label: 'Medium Priority'
  },
  low: {
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
    label: 'Low Priority'
  }
};

// Helper functions for notification management
export const notificationHelpers = {
  // Get unread notifications count
  getUnreadCount: (notifications) => {
    return notifications.filter(notification => !notification.read).length;
  },

  // Get notifications by type
  getNotificationsByType: (notifications, type) => {
    return notifications.filter(notification => notification.type === type);
  },

  // Get notifications by priority
  getNotificationsByPriority: (notifications, priority) => {
    return notifications.filter(notification => notification.priority === priority);
  },

  // Sort notifications by time (newest first)
  sortByTime: (notifications) => {
    return [...notifications].sort((a, b) => {
      // This is a simple sort based on the time string
      // In a real app, you'd use actual timestamps
      const timeA = a.time.includes('minute') ? 1 : 
                   a.time.includes('hour') ? 2 : 
                   a.time.includes('day') ? 3 : 4;
      const timeB = b.time.includes('minute') ? 1 : 
                   b.time.includes('hour') ? 2 : 
                   b.time.includes('day') ? 3 : 4;
      return timeA - timeB;
    });
  },

  // Sort notifications by priority (high to low)
  sortByPriority: (notifications) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return [...notifications].sort((a, b) => {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  },

  // Mark notification as read
  markAsRead: (notifications, id) => {
    return notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    );
  },

  // Mark all notifications as read
  markAllAsRead: (notifications) => {
    return notifications.map(notification => ({ ...notification, read: true }));
  },

  // Remove notification
  removeNotification: (notifications, id) => {
    return notifications.filter(notification => notification.id !== id);
  },

  // Add new notification
  addNotification: (notifications, newNotification) => {
    const id = Math.max(...notifications.map(n => n.id), 0) + 1;
    return [{ ...newNotification, id, read: false }, ...notifications];
  },

  // Get recent notifications (last 24 hours)
  getRecentNotifications: (notifications) => {
    return notifications.filter(notification => 
      notification.time.includes('minute') || 
      notification.time.includes('hour') ||
      (notification.time.includes('day') && parseInt(notification.time) === 1)
    );
  }
};

// Sample new notifications that could be added dynamically
export const sampleNewNotifications = [
  {
    type: 'order',
    title: 'Order Cancelled',
    message: 'Order #ORD-005 has been cancelled by the customer',
    time: 'Just now',
    icon: ShoppingCart,
    color: 'text-red-400',
    priority: 'medium'
  },
  {
    type: 'payment',
    title: 'Refund Processed',
    message: 'Refund of $99.99 has been processed for Order #ORD-003',
    time: 'Just now',
    icon: DollarSign,
    color: 'text-orange-400',
    priority: 'medium'
  },
  {
    type: 'stock',
    title: 'Critical Stock Alert',
    message: 'Smart Watch inventory is critically low (2 remaining)',
    time: 'Just now',
    icon: AlertCircle,
    color: 'text-red-400',
    priority: 'high'
  }
];

export default {
  initialNotifications,
  notificationTypes,
  priorityLevels,
  notificationHelpers,
  sampleNewNotifications
};
