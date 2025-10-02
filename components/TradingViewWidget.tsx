"use client";
import useTradingViewWidget from "@/hooks/useTradingViewWidget";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

function TradingViewWidget({
  title,
  scriptUrl,
  config,
  height,
  className,
}: TradingViewWidgetProps) {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h2 className="mb-4 text-gray-500 text-2xl font-semibold">{title}</h2>
      )}

      <div
        className={cn(`tradingview-widget-container`, className)}
        ref={containerRef}
        style={{ height, width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
