// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "IosPrinterPlugin",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "IosPrinterPlugin",
            targets: ["IOSPrinterPluginPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "IOSPrinterPluginPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/IOSPrinterPluginPlugin"),
        .testTarget(
            name: "IOSPrinterPluginPluginTests",
            dependencies: ["IOSPrinterPluginPlugin"],
            path: "ios/Tests/IOSPrinterPluginPluginTests")
    ]
)