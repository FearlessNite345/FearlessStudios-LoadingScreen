local authorName = 'FearlessStudios' -- Your author name
local resourceName = 'LoadingScreen' -- The name of your FiveM resource
local fullName = '^3[' .. authorName .. '-' .. resourceName .. '] '

-- Github info to check the version
local githubUsername = 'FearlessNite345' -- Your GitHub username
local githubRepo = 'FearlessStudios-VersionChecker' -- Your GitHub repository name
local githubVersionFilename = 'loadingscreen-version.txt' -- The filename on GitHub containing the version information

local function printVersion(cur, late, status)
    print('^7----------------------------------------------------------')
    print(fullName .. '^4Checking for update...')
    print(fullName .. '^4' .. cur)
    print(fullName .. '^4' .. late)
    print(fullName .. status)
    print('^7----------------------------------------------------------')
end

local function checkVersion()
    local cur = ''
    local late = ''
    local status = ''

    local current = GetResourceMetadata(GetCurrentResourceName(), "version", 0);
    cur = "Current version: " .. current

    PerformHttpRequest(
        'https://raw.githubusercontent.com/' .. githubUsername .. '/' ..
            githubRepo .. '/main/' .. githubVersionFilename,
        function(Error, Version, Header)
            if Error ~= 200 then
                printVersion(cur, 'Latest version: ^8Failed to fetch',
                             '^1' .. Error)
                return
            end

            late = "Latest version: " .. Version

            if Version ~= current then
                status = "^1Your " .. resourceName ..
                             " version is outdated, Go to the download page to update to the latest."
            else
                status = "^2" .. resourceName .. " is up to date!"
            end

            printVersion(cur, late, status)
        end)
end

checkVersion()
