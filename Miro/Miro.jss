<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>Description</key>
	<string>Download Miro | Create PKG | Upload to Runtastic JAMF.</string>
	<key>Identifier</key>
	<string>com.github.runtastic.jss.Miro</string>
	<key>Input</key>
	<dict>
		<key>CATEGORY</key>
		<string>Computer Science</string>
		<key>GROUP_NAME</key>
		<string>%NAME%-update-smart</string>
		<key>GROUP_TEMPLATE</key>
		<string>SmartGroupTemplate.xml</string>
		<key>JSS_INVENTORY_NAME</key>
		<string>Miro.app</string>
		<key>NAME</key>
		<string>Miro</string>
		<key>POLICY_CATEGORY</key>
		<string>Testing</string>
		<key>POLICY_TEMPLATE</key>
		<string>PolicyTemplate.xml</string>
		<key>SELF_SERVICE_DESCRIPTION</key>
		<string>Miro is a replacement for Terminal.</string>
		<key>SELF_SERVICE_ICON</key>
		<string>Miro.png</string>
		<key>Comment</key>
		<string>Note: PlistReader without variable injection in AutoPkg requires setting "version" input key to an empty string, as below.</string>
		<key>version</key>
		<string></string>
	</dict>
	<key>MinimumVersion</key>
	<string>0.3.1</string>
	<key>ParentRecipe</key>
	<string>com.github.runtastic.pkg.Miro</string>
	<key>Process</key>
	<array>
		<dict>
			<key>Arguments</key>
			<dict>
				<key>category</key>
				<string>%CATEGORY%</string>
				<key>groups</key>
				<array>
					<dict>
						<key>name</key>
						<string>%GROUP_NAME%</string>
						<key>smart</key>
						<true/>
						<key>template_path</key>
						<string>%GROUP_TEMPLATE%</string>
					</dict>
				</array>
				<key>jss_inventory_name</key>
				<string>%JSS_INVENTORY_NAME%</string>
				<key>policy_category</key>
				<string>%POLICY_CATEGORY%</string>
				<key>policy_template</key>
				<string>%POLICY_TEMPLATE%</string>
				<key>prod_name</key>
				<string>%NAME%</string>
				<key>self_service_description</key>
				<string>%SELF_SERVICE_DESCRIPTION%</string>
				<key>self_service_icon</key>
				<string>%SELF_SERVICE_ICON%</string>
			</dict>
			<key>Processor</key>
			<string>JSSImporter</string>
		</dict>
	</array>
</dict>
</plist>