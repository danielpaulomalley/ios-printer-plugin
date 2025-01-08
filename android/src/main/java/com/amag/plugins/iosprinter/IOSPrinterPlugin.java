package com.amag.plugins.iosprinter;

import android.util.Log;

public class IOSPrinterPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
